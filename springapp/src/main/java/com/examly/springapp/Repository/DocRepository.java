
package com.examly.springapp.Repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.DocumentModel;


@Repository
public interface DocRepository extends JpaRepository<DocumentModel, String>{
    Optional<DocumentModel> findPhotoById(long id);

	DocumentModel findDocById(long id);
}

