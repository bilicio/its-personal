/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig {
    onCreateConfig {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig {
    onUpdateConfig {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig {
    onDeleteConfig {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExercises = /* GraphQL */ `
  subscription OnCreateExercises {
    onCreateExercises {
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
export const onUpdateExercises = /* GraphQL */ `
  subscription OnUpdateExercises {
    onUpdateExercises {
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
export const onDeleteExercises = /* GraphQL */ `
  subscription OnDeleteExercises {
    onDeleteExercises {
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
