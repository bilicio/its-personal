/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExercises = /* GraphQL */ `
  query GetExercises($id: ID!) {
    getExercises(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExercisesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const configByType = /* GraphQL */ `
  query ConfigByType(
    $type: String!
    $idName: ModelConfigConfigIndexCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    configByType(
      type: $type
      idName: $idName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
