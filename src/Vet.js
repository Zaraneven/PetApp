import { useState, useEffect } from "react";
import Form from "./Form"
import ListPatients from "./ListPatients"

function Vet() {
    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});

    useEffect(() => {
        const getLocalStorage = () => {
            const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
            setPatients(patientsLocalStorage);
        }

        getLocalStorage();
    }, []);

    useEffect(() => {
        localStorage.setItem(`patients`, JSON.stringify(patients));
    }, [patients]);

    const deletePatient = id => {
        const patientsUpdate = patients.filter(patient => patient.id !== id);
        setPatients(patientsUpdate)
    }

    return (
        <div className="container mx-auto mt-30" style={{marginLeft: '250px'}}>

            <div className="mt-14 flex flex-col md:flex-row" >
                <Form
                    patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                />
            </div>

        </div>
    )
}

export default Vet
