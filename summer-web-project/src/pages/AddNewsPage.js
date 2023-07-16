import styled from "styled-components";
import AddForm from "../components/Add_NewsInformation/AddForm";

const AddNewsPageComponent = styled.div`
    margin: 0;
`;

function AddNewsPage() {
    return (
        <AddNewsPageComponent>
            <AddForm />
        </AddNewsPageComponent>
    );
}

export default AddNewsPage;