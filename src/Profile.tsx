import { FC } from 'hono/jsx'

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center' as const,
  },
  username: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  joinDate: {
    color: '#666',
    marginTop: '0.5rem',
  },
  counterCard: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    marginBottom: '2rem',
  },
  count: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    color: '#666',
    marginTop: '0.5rem',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginTop: '2rem',
  },
  statCard: {
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },  // <-- Added comma here
  bio: {
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    color: '#444',
    lineHeight: '1.6',
    fontSize: '1.1rem',
  }
}

const Profile: FC = () => {
  const user = {
    username: 'griffin',
    count: 42,
    joinDate: 'Joined December 2023',
    averageClicks: 12,
    totalClicks: 837,
    streakDays: 7,
    bio: "Counter enthusiast. Breaking records one click at a time. Currently trying to reach 1000 clicks! 🎯"
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.username}>@{user.username}</div>
        <div style={styles.joinDate}>{user.joinDate}</div>
      </div>

      <div style={styles.bio}>
        {user.bio}
      </div>

      <div style={styles.counterCard}>
        <div style={styles.count}>{user.count}</div>
        <div style={styles.label}>Current Count</div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <div style={styles.statValue}>{user.averageClicks}</div>
          <div style={styles.statLabel}>Avg. Clicks/Day</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>{user.totalClicks}</div>
          <div style={styles.statLabel}>Total Clicks</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>{user.streakDays}</div>
          <div style={styles.statLabel}>Day Streak</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;