import { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleBookAction,
  updateSingleBookAction,
} from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { inputFields } from "../../assets/formInputs";
import { CustomInput } from "../../components/customInpute/CustomInput";
import useForm from "../../hooks/useForm";

const EditBook = () => {
  return <h1>EDIT BOOK</h1>;
};

export default EditBook;
