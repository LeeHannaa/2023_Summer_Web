import styled from "styled-components";
import AddForm from "../components/AddNewsComponents/AddForm";

const AddNewsPageComponent = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function AddNewsPage() {
    return (
        <AddNewsPageComponent>
            <AddForm />
        </AddNewsPageComponent>
    );
}

export default AddNewsPage;