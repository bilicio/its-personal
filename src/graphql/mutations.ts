/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateConfig = /* GraphQL */ `
  mutation UpdateConfig(
    $input: UpdateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    updateConfig(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteConfig = /* GraphQL */ `
  mutation DeleteConfig(
    $input: DeleteConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    deleteConfig(input: $input, condition: $condition) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const createExercises = /* GraphQL */ `
  mutation CreateExercises(
    $input: CreateExercisesInput!
    $condition: ModelExercisesConditionInput
  ) {
    createExercises(input: $input, condition: $condition) {
      id
      name
      image
      video
      description
      categoryId
      category {
        id
        name
        type
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        type
        createdAt
        updatedAt
      }
      icon
      createdAt
      updatedAt
      exercisesCategoryId
      exercisesSubcategoryId
    }
  }
`;
export const updateExercises = /* GraphQL */ `
  mutation UpdateExercises(
    $input: UpdateExercisesInput!
    $condition: ModelExercisesConditionInput
  ) {
    updateExercises(input: $input, condition: $condition) {
      id
      name
      image
      video
      description
      categoryId
      category {
        id
        name
        type
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        type
        createdAt
        updatedAt
      }
      icon
      createdAt
      updatedAt
      exercisesCategoryId
      exercisesSubcategoryId
    }
  }
`;
export const deleteExercises = /* GraphQL */ `
  mutation DeleteExercises(
    $input: DeleteExercisesInput!
    $condition: ModelExercisesConditionInput
  ) {
    deleteExercises(input: $input, condition: $condition) {
      id
      name
      image
      video
      description
      categoryId
      category {
        id
        name
        type
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        type
        createdAt
        updatedAt
      }
      icon
      createdAt
      updatedAt
      exercisesCategoryId
      exercisesSubcategoryId
    }
  }
`;
