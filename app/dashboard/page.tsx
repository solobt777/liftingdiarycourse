"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

// Mock workout data for UI demonstration
const mockWorkouts = [
  {
    id: 1,
    name: "Morning Strength Training",
    exercises: ["Bench Press", "Squats", "Deadlifts"],
    duration: "45 min",
    category: "Strength",
  },
  {
    id: 2,
    name: "Evening Cardio",
    exercises: ["Running", "Jump Rope"],
    duration: "30 min",
    category: "Cardio",
  },
  {
    id: 3,
    name: "Core & Abs",
    exercises: ["Planks", "Crunches", "Russian Twists"],
    duration: "20 min",
    category: "Core",
  },
]

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const formatDate = (date: Date | undefined) => {
    if (!date) return "No date selected"
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Strength: "bg-blue-500",
      Cardio: "bg-green-500",
      Core: "bg-purple-500",
    }
    return colors[category] || "bg-gray-500"
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Workout Dashboard</h1>
        <p className="text-muted-foreground">
          Track your daily workouts and progress
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[350px_1fr]">
        {/* Calendar Card */}
        <Card>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
            <CardDescription>
              Choose a date to view your workouts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Workouts List */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workouts for {formatDate(selectedDate)}</CardTitle>
              <CardDescription>
                {mockWorkouts.length} workout{mockWorkouts.length !== 1 ? "s" : ""} logged
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockWorkouts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No workouts logged for this date
                  </p>
                  <Button>Add Workout</Button>
                </div>
              ) : (
                mockWorkouts.map((workout, index) => (
                  <div key={workout.id}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="space-y-3">
                      {/* Workout Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">
                            {workout.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {workout.duration}
                          </p>
                        </div>
                        <Badge className={getCategoryColor(workout.category)}>
                          {workout.category}
                        </Badge>
                      </div>

                      {/* Exercises List */}
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">
                          Exercises:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {workout.exercises.map((exercise) => (
                            <Badge key={exercise} variant="outline">
                              {exercise}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Add Workout Button */}
          {mockWorkouts.length > 0 && (
            <Card className="border-dashed">
              <CardContent className="flex items-center justify-center py-8">
                <Button size="lg">Add New Workout</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
