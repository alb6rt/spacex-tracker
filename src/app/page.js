"use client";

import { useEffect, useState } from "react";
import { getAllData } from "@/lib/spacex";
import styles from "./page.module.css";

export default function home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllData().then(setData);
  }, []);

  if (!data) {
    return (
      <div className={styles.page}>
        <p className={styles.loading}>Loading SpaceX data...</p>
      </div>
    );
  }

  const stats = [
    { value: data.launches.length, label: "Launches" },
    { value: data.launchpads.length, label: "Launchpads" },
    { value: data.landpads.length, label: "Landing Pads" },
    { value: data.rockets.length, label: "Rocket Types" },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>SpaceX Tracker</h1>
        <p className={styles.subtitle}>API connected</p>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.card}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
