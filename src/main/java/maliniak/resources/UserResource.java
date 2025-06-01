package maliniak.resources;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.SecurityContext;

import java.util.Map;

@Path("/api/user")
public class UserResource {

    @GET
    @Path("/me")
    public Response me(@Context SecurityContext ctx) {
        if (ctx.getUserPrincipal() != null) {
            return Response.ok(Map.of("username", ctx.getUserPrincipal().getName())).build();
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }
}