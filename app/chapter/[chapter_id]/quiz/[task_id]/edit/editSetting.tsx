"use client";
import React, { useEffect, useState } from "react";
import { Button, Divider, Input } from "@heroui/react";
import { apiUrl } from "@/config/api";
import { get } from "http";

interface Setting {
  id: number;
  duration: number;
  attempts: number;
  passing_grade: number;
}

export default function EditSetting(props: any) {
  const [duration, setDuration] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number | null>(null);
  const [passing_grade, setPassing_grade] = useState<number | null>(null);
  const [setting_id, setSetting_id] = useState<number | null>(null);

  const handleSubmit = async () => {
    try {
      console.log("Sending data:", {
        duration,
        attempts,
        passing_grade,
        task_id: Number(props.task_id),
        id: setting_id,
      });

      const response = await fetch(`${apiUrl}api/quiz-settings/${setting_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          duration,
          attempts,
          passing_grade,
          task_id: Number(props.task_id),
        }),
      });

      console.log("Raw Response:", response);
      const data = await response.json();
      console.log("Parsed Data:", data);

      if (!response.ok) {
        console.error("API Error Response:", data);
        throw new Error(`Failed to create task: ${response.status}`);
      }

      alert("Task updated successfully!");
      setDuration(-1);
      setAttempts(-1);
      setPassing_grade(-1);

      getSetting();
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating task. Check API and network.");
    }
  };

  const getSetting = async () => {
    try {
      const response = await fetch(
        `${apiUrl}api/tasks/${props.task_id}/quiz-settings`
      );
      const data: Setting[] = await response.json();

      console.log("Fetched Setting:", data);

      setDuration(data[0].duration);
      setAttempts(data[0].attempts);
      setPassing_grade(data[0].passing_grade);
      setSetting_id(data[0].id);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  useEffect(() => {
    getSetting();
  }, []);

  return (
    <div className="flex justify-between text-default-600 p-5 mt-2 space-x-2">
      <Input
        min={-1} // Minimum value -1
        label="Duration (minutes)"
        placeholder="Enter duration"
        type="number"
        variant="bordered"
        value={duration == null ? "" : duration.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDuration(Math.max(-1, Number(e.target.value)))
        }
        isRequired
      />
      <Input
        min={-1} // Minimum value -1
        label="Attempts"
        placeholder="Enter attempts"
        type="number"
        variant="bordered"
        value={attempts == null ? "" : attempts.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAttempts(Math.max(-1, Number(e.target.value)))
        }
        isRequired
      />
      <Input
        min={-1} // Minimum value -1
        label="Pass Grade"
        placeholder="Enter passing grade"
        type="number"
        variant="bordered"
        value={passing_grade == null ? "" : passing_grade.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassing_grade(Math.max(-1, Number(e.target.value)))
        }
        isRequired
      />
      <div className="mt-2 space-y-3">
        <Button color="success" onPress={handleSubmit}>
          Edit
        </Button>
      </div>
    </div>
  );
}
