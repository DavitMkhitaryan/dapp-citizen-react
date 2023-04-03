import { useState } from "react";
import useConnector from "../hooks/useConnector";

export interface Citizen {
    id: string;
    name: string;
    age: string;
    city: string;
}

const useCitizensNotes = () => {

    const { contract } = useConnector();

    const [modalDisplayed, setModalDisplayed] = useState<boolean>(false);
    const [currentNote, setCurrentNote] = useState<string>('');
    const [noteLoading, setNoteLoading] = useState<boolean>(false);

    const handleModalClose = () => {
        setModalDisplayed(false);
    }

    const setSelectedCitizenNote = (id: string) => {
        setNoteLoading(true);
        contract.methods.getNoteByCitizenId(id).call()
        .then((result: any) => {
            setCurrentNote(result);
            setNoteLoading(false);
        });
    }

    return { modalDisplayed, setModalDisplayed, handleModalClose, currentNote, noteLoading, setSelectedCitizenNote }
}

export default useCitizensNotes;