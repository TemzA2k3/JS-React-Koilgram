package com.example.instagramback.exception.handler;

import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.List;


import javax.mail.MessagingException;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import com.example.instagramback.constants.errors.ErrorMessagePatterns;
import com.example.instagramback.dto.ErrorMessage;
import com.example.instagramback.exception.custom.InputedDataUsedException;
import com.example.instagramback.exception.custom.IncorrectMailException;

@SuppressWarnings({"unchecked", "rawtypes"})
@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(InputedDataUsedException.class)
    public ResponseEntity<Object> handleEmailException(InputedDataUsedException exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.INPUTTED_DATA_USED_ERR, details);
        return new ResponseEntity(errorMessage, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MessagingException.class)
    public ResponseEntity<Object> handleMessageServerException(MessagingException exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.MAIL_SERVER_ERR, details);
        return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(IncorrectMailException.class)
    public ResponseEntity<Object> handleMailException(IncorrectMailException exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.EMAIL_NOT_FOUND_ERR, details);
        return new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidParameterException.class)
    public ResponseEntity<Object> handleInvalidParameterException(InvalidParameterException exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.INPUTTED_PARAMS_ERR, details);
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({ AuthenticationException.class })
    @ResponseBody
    public ResponseEntity<Object> handleInvalidParameterException(AuthenticationException exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.AUTH_ERR, details);
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({ UsernameNotFoundException.class })
    @ResponseBody
    public ResponseEntity<Object> handleUsernameNotFoundException(UsernameNotFoundException exception) {
        List<String> details = new ArrayList<>();
        details.add(exception.getMessage());
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.USERNAME_NOT_FOUND_ERR, details);
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseBody
    public ResponseEntity<Object> handleInvalidParameterException(ConstraintViolationException exception) {
        String exMessage = "";
        for (ConstraintViolation cv : exception.getConstraintViolations()) {
            StringBuffer buffer = new StringBuffer()
                .append("{ ")
                .append(cv.getPropertyPath().toString() + " ")
                .append(cv.getMessage() + ", received data : ")
                .append(cv.getInvalidValue() == null ? "null" : cv.getInvalidValue().toString())
                .append(" }");
            exMessage = buffer.toString();
        }
        List<String> details = new ArrayList<>();
        details.add(exMessage);
        ErrorMessage errorMessage = new ErrorMessage(ErrorMessagePatterns.VALIDATION_ERR, details);
        return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers,
        HttpStatus status, WebRequest request) {
        List<String> details = new ArrayList<>();
        for (ObjectError error : ex.getBindingResult().getAllErrors()) {
            details.add(error.getDefaultMessage());
        }
        ErrorMessage error = new ErrorMessage(ErrorMessagePatterns.VALIDATION_ERR, details);
        return new ResponseEntity(error, HttpStatus.BAD_REQUEST);
    }
}

