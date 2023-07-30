import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.examly.springapp.Response.LoginResponse;
import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.AuthRepository;
@Service
public class AuthService {
    @Autowired
    public AuthRepository authRepo;

    public UserModel saveUser(UserModel userModel){

        return authRepo.save(userModel);
    }
    public UserModel saveAdmin(UserModel userModel){

        return authRepo.save(userModel);
    }

   
    public LoginResponse isUserPresent(LoginModel data){
        UserModel user1 = authRepo.findByEmailId(data.getEmailId());
        if (user1 != null) {
            if (user1.getUserRole().equals("Customer") && data.getPassword() .equals(user1.getPassword())) {
                Optional<UserModel> user = authRepo.findOneByEmailIdAndPassword(data.getEmailId(), data.getPassword());
                if (user.isPresent()) {
                    return new LoginResponse("Logged in Success", true);
                } 
                else {
                    return new LoginResponse("Login Failed", false);
                }
            } 
            else {
                return new LoginResponse("Password Does not Match", false);
            }
        }
        else {
            return new LoginResponse("Email does not exits", false);
        }
   }
   
   public LoginResponse isAdminPresent(LoginModel data){
       UserModel user2 = authRepo.findByEmailId(data.getEmailId());
        if (user2 != null) {
            if (user2.getUserRole().equals("Admin") && data.getPassword() .equals(user2.getPassword())) {
                Optional<UserModel> user = authRepo.findOneByEmailIdAndPassword(data.getEmailId(), data.getPassword());
                if (user.isPresent()) {
                    return new LoginResponse("Logged in Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("Password Does not Match", false);
            }
        }
        else {
            return new LoginResponse("Email does not exits", false);
        }
   }
}












