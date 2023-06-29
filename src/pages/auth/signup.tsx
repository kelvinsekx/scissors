import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  AbsoluteCenter,
  Divider,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const user = useUser();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async ({ email, password, username }: any) => {
    await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: { data: { username } },
    });
  };

  if (user) {
    router.push("/home");
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Text fontSize={"sm"} textAlign={"center"}>
          Sign up with:
        </Text>
        <HStack spacing={10}>
          <Button colorScheme="blue" w="full">
            Google
          </Button>
          <Button colorScheme="blue" w="full">
            Apple
          </Button>
        </HStack>
        <Box position="relative" padding="5">
          <Divider />
          <AbsoluteCenter px="4" bg={useColorModeValue("gray.50", "gray.800")}>
            or
          </AbsoluteCenter>
        </Box>
        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          // boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="userName" isRequired>
                <Input type="text" placeholder="Username" />
              </FormControl>
              <FormControl id="email" isRequired>
                <Input type="email" placeholder="Email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>
                  6 or more characters, one number, one uppercase & one lower
                  case.
                </FormHelperText>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/auth/signin" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
