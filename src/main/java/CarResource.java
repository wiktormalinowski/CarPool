import jakarta.annotation.security.RolesAllowed;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import maliniak.enitities.Car;

import java.util.List;

@Path("/api/cars")
public class CarResource {
    @GET
    @RolesAllowed({"EMPLOYEE","MANAGER","SUPERVISOR"})
    public List<Car> getAll() {
        return Car.listAll();
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
