import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
        display: flex;
        align-items: flex-end;
        gap: 10px;
        flex-wrap: wrap;
        background-color: #fff;
        padding:20px;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 10px;
    `;

const InputArea = styled.div`
        display: flex;
        flex-direction: column;
        cursor: text;
        
    `;

const Input = styled.div`
        width: 120px;
        padding: 0 10px;
        border: 1px solid #000;
        border-radius: 5px;
        height: 40px;
        color: black;
    `;

    const Label = styled.label`
    `

    const Button = styled.button`
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        background-color: black;
        color: white;
        height: 42px;
    `

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref} >
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="phone" />
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="dat_nas" type="date" defaultValue="2023-08-02"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>

        </FormContainer>
    );
}

export default Form;