import { Priority, type Task } from "../types/mod";

export const tasks: Task[] = [
	{
	  id: "01H9Z4K3X5M2N1P0Q0R0S0T0U",
	  title: "Implement user authentication",
	  creator: "usr_01H9Z4K3X5M2N1P0Q0R0S0T0",
	  content: "Set up JWT authentication for the API",
	  completed: false,
	  date: {
		created: 1745984981013,
		expected: 1715000000
	  },
	  priority: 1,
	  collaborators: ["usr_01H9Z4K3X5M2N1P0Q0R0S0T1"],
	  comments: [
		{
		  creator: "usr_01H9Z4K3X5M2N1P0Q0R0S0T1",
		  content: "Should we add rate limiting?",
		  createdAt: 1714503000
		}
	  ]
	},
	{
	  id: "01H9Z4K3X5M2N1P0Q0R0S0T1V",
	  title: "Design database schema",
	  creator: "usr_01H9Z4K3X5M2N1P0Q0R0S0T1",
	  completed: true,
	  date: {
		created: 1714503600,
		completed: 1714590000
	  },
	  priority: 1,
	  categories: ["backend", "database"],
	  subTasks: [
		{
		  title: "Define user table structure",
		  creator: "usr_01H9Z4K3X5M2N1P0Q0R0S0T1",
		  completed: true,
		  date: {
			created: 1714504000
		  },
		  priority: 1
		}
	  ]
	},
	{
	  id: "01H9Z4K3X5M2N1P0Q0R0S0T2W",
	  title: "Deploy to production",
	  creator: "usr_01H9Z4K3X5M2N1P0Q0R0S0T0",
	  content: "Final deployment before launch",
	  completed: false,
	  date: {
		created: 1714504800,
		expected: 1715500000
	  },
	  priority: 1,
	  collaborators: [
		"usr_01H9Z4K3X5M2N1P0Q0R0S0T0",
		"usr_01H9Z4K3X5M2N1P0Q0R0S0T1"
	  ]
	}
  ];