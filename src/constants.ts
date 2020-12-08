export const LOCAL_STORAGE_TOKEN_KEY = "token";

const GENERIC_ERROR = "There was an error";

export const errorsMap = {
  INVALID_EMAIL_PASSWORD: "You are using the wrong email or password",
};

export const getError = (error: keyof typeof errorsMap | null): string => {
  if (!error) return GENERIC_ERROR;

  return errorsMap[error];
};
