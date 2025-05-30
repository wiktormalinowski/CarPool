import jakarta.annotation.security.RolesAllowed;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import maliniak.enitities.Car;

import java.util.List;

@Path("/api/cars")
public class CarResource {
    @GET
    public List<Car> getAll() {
        return Car.listAll();
    }

    @POST
    @Path("{id}")
    @Transactional
    public Response reserve(@PathParam("id") Long id) {
        Car car = Car.findById(id);
        if (car == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        car.reserved = true;
        car.persistAndFlush();

        return Response.ok(car).build();
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
