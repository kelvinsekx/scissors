import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

import {
  Flex,
  Box,
  Input,
  Text,
  FormControl,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  useColorModeValue,
  Link,
  AbsoluteCenter,
  Divider,
  FormHelperText,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type InputType = {
  email: string;
  password: string;
  username: string;
};
/**
 *
 *
 */
export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  /**
   * react-hook-form
   */
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async ({ email, password, username }: InputType) => {
    
    const res = await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: { data: { username } },
    });
    if (res.error) {
      toast(res.error.message, { type: "error" });
    }
    if (res.data.user) {
      reset();
      toast("User created! Check your email for verification before log in. ", {
        type: "success",
      });
      router.push("/auth/signin");
    }
  };

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
              <FormControl
                id="username"
                isRequired
                isInvalid={!!errors.password}
              >
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
              </FormControl>
              <FormControl id="email" isInvalid={!!errors.email}>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!errors.password}
                isRequired
              >
                <InputGroup>
                  <Input
                    id="password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
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
                  type="submit"
                  isLoading={isSubmitting}
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
      <ToastContainer />
    </Flex>
  );
}
