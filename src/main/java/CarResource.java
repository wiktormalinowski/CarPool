import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import maliniak.enitities.Car;

import java.util.List;

@Path("/api/cars")
public class CarResource {
    @GET
    @RolesAllowed({"EMPLOYEE","MANAGER","SUPERVISOR"})
    public List<Car> getAll() {
        return Car.listAll();
    }
}
