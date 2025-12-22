import { integer, pgTable, varchar, text, timestamp, boolean, decimal } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Master exercise library
export const exercisesTable = pgTable("exercises", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
  description: text(),
  category: varchar({ length: 100 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Workout sessions
export const workoutsTable = pgTable("workouts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  name: varchar({ length: 255 }),
  notes: text(),
  workoutDate: timestamp("workout_date").defaultNow().notNull(),
  durationMinutes: integer("duration_minutes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Junction table linking workouts to exercises
export const workoutExercisesTable = pgTable("workout_exercises", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  workoutId: integer("workout_id").notNull().references(() => workoutsTable.id, { onDelete: "cascade" }),
  exerciseId: integer("exercise_id").notNull().references(() => exercisesTable.id),
  order: integer().notNull(),
  notes: text(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Individual sets within workout exercises
export const setsTable = pgTable("sets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  workoutExerciseId: integer("workout_exercise_id").notNull().references(() => workoutExercisesTable.id, { onDelete: "cascade" }),
  setNumber: integer("set_number").notNull(),
  reps: integer(),
  weight: decimal({ precision: 10, scale: 2 }),
  durationSeconds: integer("duration_seconds"),
  rpe: integer(),
  completed: boolean().default(true).notNull(),
  notes: text(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const workoutsRelations = relations(workoutsTable, ({ many }) => ({
  workoutExercises: many(workoutExercisesTable),
}));

export const exercisesRelations = relations(exercisesTable, ({ many }) => ({
  workoutExercises: many(workoutExercisesTable),
}));

export const workoutExercisesRelations = relations(workoutExercisesTable, ({ one, many }) => ({
  workout: one(workoutsTable, {
    fields: [workoutExercisesTable.workoutId],
    references: [workoutsTable.id],
  }),
  exercise: one(exercisesTable, {
    fields: [workoutExercisesTable.exerciseId],
    references: [exercisesTable.id],
  }),
  sets: many(setsTable),
}));

export const setsRelations = relations(setsTable, ({ one }) => ({
  workoutExercise: one(workoutExercisesTable, {
    fields: [setsTable.workoutExerciseId],
    references: [workoutExercisesTable.id],
  }),
}));
