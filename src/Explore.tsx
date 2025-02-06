import { FC } from 'hono/jsx'

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  username: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: '#666',
  },
  count: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  }
}

const Explore: FC = () => {
  const mockUsers = [
    { username: 'griffin', count: 42 },
    { username: 'alice', count: 127 },
    { username: 'bob', count: 83 },
    { username: 'charlie', count: 256 },
    { username: 'diana', count: 19 },
    { username: 'evan', count: 365 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore Counters</h1>
      
      <div style={styles.grid}>
        {mockUsers.map((user) => (
          <div key={user.username} style={styles.card}>
            <div style={styles.username}>@{user.username}</div>
            <div style={styles.count}>{user.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;