package maliniak.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;
import java.util.List;


@Entity
public class Reservation extends PanacheEntity {

    @Column(name = "username", nullable = false)
    public String username;

    @OneToOne
    @JoinColumn(name = "car_id", unique = true, nullable = false)
    public Car car;

    public static List<Car> findCarsReservedByUser(String username) {
        List<Reservation> reservations = list("username", username);
        return reservations.stream().map(r -> r.car).toList();
    }

}
