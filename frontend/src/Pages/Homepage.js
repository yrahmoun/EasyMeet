import React from 'react'
import {
  Box,
  Container,
  Tab,
  TabList,
  Tabs,
  Text,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        bg="white"
        w="100%"
        m="20px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
        centerContent
      >
        <Text fontSize="xxx-large" fontFamily="Work sans" color="#333">
          Easy Meet
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="#333" _selected={{ color: "#fff", bg: "#333" }}>Login</Tab>
            <Tab color="#333" _selected={{ color: "#fff", bg: "#333" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage