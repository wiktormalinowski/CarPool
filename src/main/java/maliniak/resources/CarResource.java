package maliniak.resources;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.SecurityContext;
import maliniak.entities.Car;
import maliniak.entities.Reservation;

import java.util.List;

@Path("/api/cars")
public class CarResource {

    @GET
    public List<Car> getFreeCars() {
        return Car.list("reservation IS NULL");
    }

    @GET
    @Path("/my-reserved")
    public List<Car> getMyReservedCars(@Context SecurityContext ctx) {
        String username = ctx.getUserPrincipal().getName();
        return Reservation.findCarsReservedByUser(username);
    }

    @POST
    @Path("/{carId}/reserve")
    @Transactional
    public Response reserveCar(@PathParam("carId") Long carId, @Context SecurityContext ctx) {
        String username = ctx.getUserPrincipal().getName();

        Car car = Car.findById(carId);
        if (car == null) {
            return Response.status(Response.Status.NOT_FOUND)
                    .build();
        }

        boolean alreadyReserved = Reservation.find("car", car).firstResult() != null;
        if (alreadyReserved) {
            return Response.status(Response.Status.CONFLICT)
                    .build();
        }

        Reservation reservation = new Reservation();
        reservation.username = username;
        reservation.car = car;
        reservation.persist();

        return Response.status(Response.Status.CREATED)
                .build();
    }

    @POST
    @Path("/{carId}/release")
    @Transactional
    public Response releaseCar(@PathParam("carId") Long carId, @Context SecurityContext ctx) {
        String username = ctx.getUserPrincipal().getName();

        Car car = Car.findById(carId);
        if (car == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        Reservation reservation = Reservation.find("car = ?1 and username = ?2", car, username).firstResult();
        if (reservation == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        car.reservation = null;
        car.persist();
        reservation.delete();

        return Response.ok().build();
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void delete(@PathParam("id") Long id) {
        Car car = Car.findById(id);
        if(car == null) {
            throw new NotFoundException();
        }
        car.delete();
    }
}
