import sqlite3
from datetime import datetime

# Connect to database (creates if not exists)
conn = sqlite3.connect('./DB/mydatabase.db')

# Create a cursor object
cursor = conn.cursor()

# Create table
cursor.execute('''CREATE TABLE IF NOT EXISTS stress_results (
                    id INTEGER PRIMARY KEY,
                    date TEXT NOT NULL,
                    result TEXT NOT NULL
                  )''')

# Get current date
current_date = datetime.now().strftime('%Y-%m-%d')

# Example: Insert data
cursor.execute("INSERT INTO stress_results (date, result) VALUES (?, ?)", (current_date, 'Low/Normal Stress'))

# Commit changes
conn.commit()

# Close connection
conn.close()