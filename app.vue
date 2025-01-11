<script lang="js" setup>

const baseUrl = useRuntimeConfig().public.BASE_URL;

const users = ref([]);
const error = ref(null);
const name = ref('');
const email = ref('');

onMounted(async () => {
  try {
    const response = await fetch(`${baseUrl}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    users.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
});

const addUser = async (name, email) => {
  try {
    const response = await fetch(`${baseUrl}/users/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('User added:', result);
    return result;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("User deleted:", result);

    users.value = users.value.filter((user) => user.id !== id);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

const handleSubmit = async () => {
  try {
     const newUser = await addUser(name.value, email.value);
    console.log('User successfully added:', newUser);

    users.value = [...users.value, newUser];

    name.value = '';
    email.value = '';
  } catch (error) {
    console.error('Failed to add user:', error);
  }
};
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">Users</h1>
    <div v-if="error">Error: {{ error }}</div>

    <table
      v-else
      class="table-auto w-full border-collapse border border-gray-200 mb-4"
    >
      <thead>
        <tr class="bg-gray-100">
          <th class="border px-4 py-2">ID</th>
          <th class="border px-4 py-2">Name</th>
          <th class="border px-4 py-2">Email</th>
          <th class="border px-4 py-2">Created At</th>
          <th class="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
          <td class="border px-4 py-2">{{ user.id }}</td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2">
            {{ new Date(user.created_at).toLocaleString() }}
          </td>
          <td class="border px-4 py-2">
            <button
              @click="deleteUser(user.id)"
              class="text-red-500 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <form
      @submit.prevent="handleSubmit"
      class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add User
        </button>
      </div>
    </form>
  </div>
</template>
