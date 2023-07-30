import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.Model.UserModel;
import java.util.Optional;

@Repository
public interface AuthRepository extends JpaRepository<UserModel ,Long> {

 UserModel findByEmailId(String emailId);
 Optional<UserModel> findOneByEmailIdAndPassword(String email, String password);

}