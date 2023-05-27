import './ExploreContainer.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonAlert
} from '@ionic/react';
import { Preferences } from '@capacitor/preferences';

import { trash } from 'ionicons/icons';

interface Picture {
  thumbnail: string;
}

interface Name {
  first: string;
  last: string;
}

interface Location {
  city: string;
  country: string;
}

interface User {
  picture: Picture;
  name: Name;
  email: string;
  dob: {
    date: string;
  };
  location: Location;
}

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedData = await Preferences.get({ key: 'users' });

      if (storedData && storedData.value) {
        setUsers(JSON.parse(storedData.value));
      } else {
        const response = await axios.get('https://randomuser.me/api/');
        setUsers(response.data.results);
        await Preferences.set({ key: 'users', value: JSON.stringify(response.data.results) });
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleGenerateUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      setUsers(response.data.results);
      await Preferences.set({ key: 'users', value: JSON.stringify(response.data.results) });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleDelete = async () => {
    if (selectedUser) {
      const updatedUsers = users.filter((user) => user !== selectedUser);
      setUsers(updatedUsers);
      setSelectedUser(null);
      await Preferences.set({ key: 'users', value: JSON.stringify(updatedUsers) });
    }
  };

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const confirmDelete = () => {
    setShowAlert(true);
  };

  return (
    <div className="container">
      <IonButton onClick={handleGenerateUsers}>Generar usuarios aleatorios</IonButton>
      <h1>Lista de usuarios</h1>

      <IonList>
        {users.map((user, index) => (
          <IonItem key={index} button onClick={() => openModal(user)}>
            <img src={user.picture.thumbnail} alt="User Thumbnail" slot="start" />
            <IonLabel>
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

      <IonModal isOpen={!!selectedUser} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Información adicional</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedUser && (
            <div>
              <img src={selectedUser.picture.thumbnail} alt="User Thumbnail" />
              <h2>{`${selectedUser.name.first} ${selectedUser.name.last}`}</h2>
              <p>Email: {selectedUser.email}</p>
              <p>Date of Birth: {selectedUser.dob.date}</p>
              <p>Location: {`${selectedUser.location.city}, ${selectedUser.location.country}`}</p>
              <IonButton expand="full" color="danger" onClick={confirmDelete}>
                <IonIcon icon={trash} />
                Eliminar
              </IonButton>
            </div>
          )}
        </IonContent>
      </IonModal>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Confirmación"
        message="¿Estás seguro de que deseas eliminar este usuario?"
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Eliminar',
            handler: handleDelete,
            cssClass: 'danger',
          },
        ]}
      />
    </div>
  );
};

export default ExploreContainer;
