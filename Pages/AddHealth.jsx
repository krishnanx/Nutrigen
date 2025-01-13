import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { RadioButton, IconButton, Button } from 'react-native-paper';
import AllergyButton from '../components/AllergyButton';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Context/AuthProvider';
import addSupaDetails from '../functions/addSupaDetails';
import StyledRadioButton from '../components/StyledRadioButton';
import StyledButton from '../components/StyledButton';
import CustomDialog from '../components/CustomDialog';

const AddHealth = ({ route, navigation }) => {
  const { email, password, userDetails } = route.params;
  const [details, setDetails] = useState(userDetails);
  const [dialogMessage , setDialogMessage] = useState("");
  const [isDialogVisible , setIsDialogVisible] = useState(false);
  const {user} = useContext(AuthContext)

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#141414',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      color: 'white',
      textAlign: 'center',
    },
    subContainer: {
      width: '100%',
      alignItems: 'center',
    },
    subTitle: {
      fontSize: 16,
      color: 'white',
      alignSelf: 'flex-start',
      marginTop: 25,
      marginLeft: 10,
    },
    options: {
      marginTop: 20,
      gap:10,
      width: '100%',
    },
    icons: {
      flexWrap: 'wrap',
      width: '100%',
      flexDirection: 'row',
      marginLeft:30
    },
    button: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray',
      height: 100,
      width: 100,
      marginTop: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button2:{
      borderRadius:3
    }
  });
  const handleNext = async()=>{
    if(!details.diet){
      setDialogMessage("Please select a Diet");
      setIsDialogVisible(true);
      return
    }
    if(!details.lifestyle){
      setDialogMessage("Please select a lifestyle goal");
      setIsDialogVisible(true)
      return
    }
    const response = await addSupaDetails(user,details)
    console.log(details);
    //the details contains all the health data
    //add the supabse logic here
    navigation.navigate("GetStarted");
  }

  const addDisease = (disease) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      disease: prevDetails.disease.includes(disease)
        ? prevDetails.disease.filter((d) => d !== disease) // Remove if exists
        : [...prevDetails.disease, disease], // Add if not exists
    }));
  };

  const isDiseasePresent = (diseaseToCheck) => {
    return details.disease.includes(diseaseToCheck);
  };
  const clearDiseases = () => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      disease: [],
    }));
  };
    
  

  return (
    <ScrollView style={styles.mainContainer} >
      <CustomDialog visible={isDialogVisible} onClose={()=>setIsDialogVisible(false)} message={dialogMessage} />
      <Text style={styles.title}>Add Health Info</Text>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Dietary Preferences</Text>
        <View style={styles.options}>
          <StyledRadioButton text='Vegetarian' selected={details.diet=="Vegetarian"} onPress={()=>setDetails({...details , diet:"Vegetarian"})}/>
          <StyledRadioButton text='Non Vegetarian' selected={details.diet=="Non Vegetarian"} onPress={()=>setDetails({...details , diet:"Non Vegetarian"})}/>
          <StyledRadioButton text='Jain' selected={details.diet=="Jain"} onPress={()=>setDetails({...details , diet:"Jain"})}/>
          <StyledRadioButton text='Vegan' selected={details.diet=="Vegan"} onPress={()=>setDetails({...details , diet:"Vegan"})}/>
        </View>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Health and Lifestyle Goals</Text>
        <View style={styles.options}>
          <StyledRadioButton text='Weight Loss' selected={details.lifestyle=="Weight Loss"} onPress={()=>setDetails({...details , lifestyle:"Weight Loss"})}/>
          <StyledRadioButton text='Cardio Training' selected={details.lifestyle=="Cardio Training"} onPress={()=>setDetails({...details , lifestyle:"Cardio Training"})}/>
          <StyledRadioButton text='Strength Training' selected={details.lifestyle=="Strength Training"} onPress={()=>setDetails({...details , lifestyle:"Strength Training"})}/>
          <StyledRadioButton text='Healthy Heart' selected={details.lifestyle=="Healthy Heart"} onPress={()=>setDetails({...details , lifestyle:"Healthy Heart"})}/>
        </View>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Allergies and Aversions</Text>
        <View style={styles.icons}>
          <AllergyButton buttonIcon="barley" text="Gluten" selected={isDiseasePresent("Gluten")} onPress={() => addDisease("Gluten")}/>
          <AllergyButton buttonIcon="corn" text="Corn" selected={isDiseasePresent("Corn")} onPress={() => addDisease("Corn")}/>
          <AllergyButton buttonIcon="egg-outline" text="Egg" selected={isDiseasePresent("Egg")} onPress={() => addDisease("Egg")}/>
          <AllergyButton buttonIcon="fish" text="Fish" selected={isDiseasePresent("Fish")} onPress={() => addDisease("Fish")}/>
          <AllergyButton buttonIcon="food-steak" text="Meat" selected={isDiseasePresent("Meat")} onPress={() => addDisease("Meat")}/>
          <AllergyButton buttonIcon="peanut-outline" text="Peanut" selected={isDiseasePresent("Peanut")} onPress={() => addDisease("Peanut")}/>
          <AllergyButton buttonIcon="bottle-soda" text="Milk" selected={isDiseasePresent("Milk")} onPress={() => addDisease("Milk")}/>
          <AllergyButton buttonIcon="duck" text="Poultry" selected={isDiseasePresent("Poultry")} onPress={() => addDisease("Poultry")}/>
          <AllergyButton buttonIcon="carrot" text="Root Vegetable" selected={isDiseasePresent("Root Vegetable")} onPress={() => addDisease("Root Vegetable")}/>
          <AllergyButton buttonIcon="soy-sauce" text="Soy" selected={isDiseasePresent("Soy")} onPress={() => addDisease("Soy")}/>
          <AllergyButton buttonIcon="yeast" text="Yeast" selected={isDiseasePresent("Yeast")} onPress={() => addDisease("Yeast")}/>
          <AllergyButton buttonIcon="beehive-outline" text="Honey" selected={isDiseasePresent("Honey")} onPress={() => addDisease("Honey")}/>
          <AllergyButton buttonIcon="mushroom" text="Fungus" selected={isDiseasePresent("Fungus")} onPress={() => addDisease("Fungus")}/>
          <AllergyButton buttonIcon="liquor" text="Alcohol" selected={isDiseasePresent("Alcohol")} onPress={() => addDisease("Alcohol")}/>
          <AllergyButton buttonIcon="close" text="Clear Selection" selected={false} onPress={() => clearDiseases()}/>
        </View>
        <View style={{width:"85%" , flexDirection:"row" ,justifyContent:"space-between",alignItems:"center", marginTop:15}}>
          <TouchableHighlight onPress={()=>navigation.navigate("Details")}>
            <Text style={{fontSize:16 , fontWeight:400 , color:"#5F6061"}}>Back</Text>
          </TouchableHighlight>
          <StyledButton width={100} height={40} title={"Next"} onPress={handleNext} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddHealth;
