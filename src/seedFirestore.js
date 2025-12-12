import { db } from './firebase/config'
import { collection, addDoc} from 'firebase/firestore'

const creditsData = [
    {
        name: "Credito de libre inversión",
        description: "Dinero más rapido",
        minAmount: 1000000,
        maxAmount: 30000000,
        interestRate: 1.8,
        maxTern: 60,
        requeriments: "Mayor de 18 años, ingresos minimos de $1.200.000",
        icon: ""
    },

    {
        name: "Credito de vehiculo",
        description: "Consigue el vehiculo de tus sueños",
        minAmount: 1000000,
        maxAmount: 90000000,
        interestRate: 2.1,
        maxTern: 120,
        requeriments: "Mayor de 18 años, ingresos minimos de $1.200.000",
        icon: ""
    },

    {
        name: "Credito de vivienda",
        description: "Te prestamos dinero para que puedas formar un hogar",
        minAmount: 1000000,
        maxAmount: 200000000,
        interestRate: 1.7,
        maxTern: 170,
        requeriments: "Mayor de 18 años, ingresos minimos de $1.200.000",
        icon: ""
    },

    {
        name: "Credito educativo",
        description: "Aprovecha la oportunidad y concluye tu proceso educativo",
        minAmount: 500000,
        maxAmount: 10000000,
        interestRate: 1.4,
        maxTern: 60,
        requeriments: "Mayor de 18 años, ingresos minimos de $1.200.000",
        icon: ""
    },

    {
        name: "Credito empresarial",
        description: "Aqui te ayudamos a crear tu propio emprendimiento",
        minAmount: 1000000,
        maxAmount: 30000000,
        interestRate: 1.8,
        maxTern: 60,
        requeriments: "Mayor de 18 años, ingresos minimos de $1.200.000",
        icon: ""
    },

    {
        name: "Credito de consumo",
        description: "Dinero de poco monto, rapido y facil",
        minAmount: 500000,
        maxAmount: 10000000,
        interestRate: 1.9,
        maxTern: 80,
        requeriments: "Mayor de 18 años, ingresos minimos de $1.200.000",
        icon: ""
    }
];

const seedFirestore = async () => {
    try{
        console.log('Iniciando carga de datos a Firestore');

        for (const credit of creditsData) {
            const docRef = await addDoc(collection(db, 'credits'), credit);
            console.log(`${credit,name} agregado con ID: ${docRef.id}`);
        }

        console.log('Todos los creditos fueron agregados exitosamente');
        console.log('En cuanto se persistan los registros borrar este archivo');

    } catch (error) {
        console.error('Error al cargar datos: ', error)
    }
};

seedFirestore();