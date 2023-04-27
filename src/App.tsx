import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Container, MantineProvider, Text, Title, Image } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>



    <Image maw={240} mx="auto" radius="md" src="/girlsday-portfolio-mariella/GirlsDay-2.jpg" alt="Profil Image" />
    <Text size={100}>Mariella </Text>
    <Carousel slideSize="70%" height={200} slideGap="xl" controlsOffset="md" controlSize={30} loop draggable={false}>
      {/* ...slides */}
      <Carousel.Slide> <Image maw={240} mx="auto" radius="md" src="/girlsday-portfolio-mariella/GirlsDay-3.jpg" alt="Profil Image" /></Carousel.Slide>
      <Carousel.Slide> <Text size={50}>wir...</Text></Carousel.Slide>
      <Carousel.Slide> <Text size={50}>beobachten...</Text></Carousel.Slide>
      <Carousel.Slide> <Text size={50}>DICH!!!</Text></Carousel.Slide>
    </Carousel>



        <Card mt="xl">
          
          <Text mt="sm">
            
          </Text>
        </Card>
        <Button color="red" radius="xs" size="md">
      DRÜCK MICH 
    </Button>
        <Text mt="md" c="dimmed">
          Meine Hobbys...
          Hobby los sein :) 
        </Text>
      </Container>
    </MantineProvider>
  );
}

export default App;
