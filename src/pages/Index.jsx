import React, { useState } from "react";
import { Container, VStack, HStack, Text, Box, Button, Input, Textarea, IconButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaPhone, FaEdit, FaSave } from "react-icons/fa";

const Index = () => {
  const [callLogs, setCallLogs] = useState([
    { id: 1, caller: "John Doe", time: "10:00 AM", duration: "5 mins" },
    { id: 2, caller: "Jane Smith", time: "11:00 AM", duration: "10 mins" },
  ]);

  const [greeting, setGreeting] = useState("Hello! How can I assist you today?");
  const [isEditingGreeting, setIsEditingGreeting] = useState(false);

  const [knowledgeBase, setKnowledgeBase] = useState([
    { id: 1, question: "What are the office hours?", answer: "We are open from 9 AM to 5 PM." },
    { id: 2, question: "How can I reset my password?", answer: 'Click on "Forgot Password" on the login page.' },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleSaveGreeting = () => {
    setIsEditingGreeting(false);
  };

  const handleAddKnowledge = () => {
    setKnowledgeBase([...knowledgeBase, { id: knowledgeBase.length + 1, question: newQuestion, answer: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Text fontSize="2xl" mb={4}>
            Call Logs
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Caller</Th>
                <Th>Time</Th>
                <Th>Duration</Th>
              </Tr>
            </Thead>
            <Tbody>
              {callLogs.map((log) => (
                <Tr key={log.id}>
                  <Td>{log.caller}</Td>
                  <Td>{log.time}</Td>
                  <Td>{log.duration}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box>
          <HStack justifyContent="space-between">
            <Text fontSize="2xl">Initial Greeting</Text>
            <IconButton aria-label="Edit Greeting" icon={<FaEdit />} onClick={() => setIsEditingGreeting(true)} />
          </HStack>
          {isEditingGreeting ? (
            <VStack spacing={4} mt={4}>
              <Textarea value={greeting} onChange={(e) => setGreeting(e.target.value)} />
              <Button leftIcon={<FaSave />} colorScheme="teal" onClick={handleSaveGreeting}>
                Save
              </Button>
            </VStack>
          ) : (
            <Text mt={4}>{greeting}</Text>
          )}
        </Box>

        <Box>
          <Text fontSize="2xl" mb={4}>
            Knowledge Base
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Question</Th>
                <Th>Answer</Th>
              </Tr>
            </Thead>
            <Tbody>
              {knowledgeBase.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.question}</Td>
                  <Td>{item.answer}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <VStack spacing={4} mt={4}>
            <Input placeholder="New Question" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
            <Textarea placeholder="New Answer" value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} />
            <Button leftIcon={<FaSave />} colorScheme="teal" onClick={handleAddKnowledge}>
              Add to Knowledge Base
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
