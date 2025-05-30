import jakarta.annotation.security.RolesAllowed;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import maliniak.enitities.Car;

import java.util.List;
import java.util.Map;

@Path("/api/cars")
public class CarResource {
    @GET
    public List<Car> getAll() {
        return Car.listAll();
    }

    @PATCH
    @Path("{id}/reserved")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response updateReservation(@PathParam("id") Long id, Map<String, Object> body) {
        Car car = Car.findById(id);
        if (car == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        Object reservedValue = body.get("reserved");
        if (!(reservedValue instanceof Boolean)) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Missing or invalid 'reserved' field").build();
        }

        car.reserved = (Boolean) reservedValue;
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
