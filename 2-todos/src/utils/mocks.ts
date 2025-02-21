import type { Task } from "../../deno/types/mod.ts"
import { Priority } from "../../deno/types/mod.ts"

export const tasks: Task[] = [
    {
      id: "1",
      title: "Completar informe mensual",
      content: "Revisar y finalizar el informe mensual de ventas.",
      completed: false,
      comments: [
        {
          id: "c1",
          userID: "u1",
          content: "No olvides incluir los datos de la última semana.",
          createdAt: 1633072800000, // 1 de octubre de 2021
        },
      ],
      subTasks: [
        {
          id: "s1",
          title: "Recopilar datos de ventas",
          content: "Obtener los datos de ventas de todos los departamentos.",
          completed: true,
          comments: [],
          subTasks: [],
          date: {
            created: 1633072800000,
            completed: 1633159200000,
            expected: 1633159200000,
          },
          priority: Priority.medium,
        },
        {
          id: "s2",
          title: "Revisar cifras con el equipo",
          content: "Reunirse con el equipo para validar las cifras.",
          completed: false,
          comments: [],
          subTasks: [],
          date: {
            created: 1633072800000,
            completed: 0,
            expected: 1633245600000,
          },
          priority: Priority.high,
        },
      ],
      date: {
        created: 1633072800000,
        completed: 0,
        expected: 1633332000000,
      },
      priority: Priority.high,
    },
    {
      id: "2",
      title: "Preparar presentación para la junta",
      content: "Crear una presentación para la junta directiva del próximo lunes.",
      completed: false,
      comments: [],
      subTasks: [
        {
          id: "s3",
          title: "Recopilar datos financieros",
          content: "Obtener los datos financieros del último trimestre.",
          completed: false,
          comments: [],
          subTasks: [],
          date: {
            created: 1633072800000,
            completed: 0,
            expected: 1633159200000,
          },
          priority: Priority.important,
        },
        {
          id: "s4",
          title: "Diseñar diapositivas",
          content: "Crear las diapositivas para la presentación.",
          completed: false,
          comments: [],
          subTasks: [],
          date: {
            created: 1633072800000,
            completed: 0,
            expected: 1633245600000,
          },
          priority: Priority.medium,
        },
      ],
      date: {
        created: 1633072800000,
        completed: 0,
        expected: 1633332000000,
      },
      priority: Priority.important,
    },
    {
      id: "3",
      title: "Revisar correos electrónicos pendientes",
      content: "Revisar y responder a los correos electrónicos pendientes.",
      completed: true,
      comments: [
        {
          id: "c2",
          userID: "u2",
          content: "Correo importante del cliente XYZ.",
          createdAt: 1633072800000,
        },
      ],
      subTasks: [],
      date: {
        created: 1633072800000,
        completed: 1633159200000,
        expected: 1633159200000,
      },
      priority: Priority.low,
    },
  ];
