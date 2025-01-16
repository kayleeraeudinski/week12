// Example of syncing data to a server
async function syncData() {
    const data = { key: "value" };
    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Data synced successfully:', result);
    } catch (error) {
      console.error('Error syncing data:', error);
    }
  }
  
  // Call the function to sync data
  syncData();
  