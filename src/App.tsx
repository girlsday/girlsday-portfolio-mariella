import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Container, MantineProvider, Text, Title, Image, Center, Group, Stack, Grid, Flex } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

   
        <Center maw={400} h={100} mx="auto">
          <Text size={100}>Mariella </Text>
        </Center>

        <Flex 
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{sm: 'center' }}
          align={"center"}>
            
          <Image m={"md"} maw={260} src="/girlsday-portfolio-mariella/GirlsDay-2.jpg" alt="Profil Image" />
          <Group>
          <Text m={"md"}>
                  Ich bin Mariella, im Moment 12 und ich habe zwei Katzen. Ich gehe in die siebte Klasse,
                  habe einen kleinen Brunder und weiß jetzt schon nicht mehr was ich schreiben soll.
                  Meine Hobbys zur Zeit sind Hip Hop tanzen, eigentlich generell Sport machen, zeichnen und Musik hören. 
          </Text>
            <Center >
              <Button m={"md"} color="red" radius="xs" size="md" onClick={()=> {alert("COOL das DU mich gedrückt hast!!!!!")}}>DRÜCK MICH</Button>
            </Center>
          </Group>
  
          
                </Flex>
                
        


      <Grid justify="center" my={60}>
        <Grid.Col span={4}>
          <Image mt={8} miw={200} src={"/girlsday-portfolio-mariella/GirlsDay-4.jpg"}></Image>
        </Grid.Col>
        <Grid.Col span={2}>
        <Image src={"/girlsday-portfolio-mariella/GirlsDay-7.jpg"}></Image>
      
        </Grid.Col>
      </Grid>

    <Carousel slideSize="70%"  slideGap="xl" controlsOffset={500} controlSize={30} loop draggable={false}>
      {/* ...slides */}
      <Carousel.Slide> <Image maw={240} mx="auto" radius="md" src="/girlsday-portfolio-mariella/GirlsDay-3.jpg" alt="Profil Image" /></Carousel.Slide>
      <Carousel.Slide> <Image fit="scale-down" height={"350"} radius="md" src="/girlsday-portfolio-mariella/IMG_0347.jpg" alt="Profil Image" /></Carousel.Slide>
      <Carousel.Slide> <Image maw={240} mx="auto" radius="md" src="/girlsday-portfolio-mariella/GirlsDay-5.jpg" alt="Profil Image" /></Carousel.Slide>
      <Carousel.Slide> <Image fit="scale-down" height={"350"} radius="md" src="/girlsday-portfolio-mariella/IMG_0460.jpg" alt="Profil Image" /></Carousel.Slide>
    </Carousel>
        <Card mt="xl">
          
          <Text mt="sm">
            
          </Text>
        </Card>

 
    </MantineProvider>
  );
}

export default App;
