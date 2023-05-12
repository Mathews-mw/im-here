import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Pariticipant } from '../../components/Participant';
import { useState } from 'react';


export function Home() {
  const [participantslist, setParticipantslist] = useState<string[]>([]); 
  const [participantName, setParticipantName] = useState('');


  function handlerAddParticipant(name: string) {
    if (participantslist.includes(name)) {
      return Alert.alert('Participante duplicado', 'Já existe um participante na lista com esse nome.');
    }

    setParticipantslist(prevState => [name, ...prevState]);
    setParticipantName('');
  }

  function handlerRemoveParticipant(name: string) {
    Alert.alert('Remover', `Certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipantslist(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      
      <Text style={styles.eventDate}>Quinta-feira, 11 de Maio de 2023.</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor='#6b6b6b' value={participantName} onChangeText={value => setParticipantName(value)} />

        <TouchableOpacity style={styles.button} onPress={() => handlerAddParticipant(participantName)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantslist}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Pariticipant key={item} name={item} onRemove={() => handlerRemoveParticipant(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Sem participantes.
          </Text>
        )}
      />

    </View>
  );
}


