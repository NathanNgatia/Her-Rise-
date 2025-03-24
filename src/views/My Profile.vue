<template>
    <v-container class="profile-page">
        <v-row class="mb-10">
        <v-col cols="12">
            <h1 class="text-h2 text-center mb-4">Profile</h1>
            <p class="text-center">Welcome back, Nathan!</p>
        </v-col>
        </v-row>
    
        <!-- Profile Info -->
        <v-row class="mb-10">
        <v-col cols="12" md="6">
            <v-card class="profile-card">
            <v-card-title>Profile Information</v-card-title>
            <v-card-text>
                <v-list>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Name</v-list-item-title>
                    <v-list-item-subtitle>Nathan Ngatia</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Email</v-list-item-title>
<v-list-item-subtitle>nathan@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
</script>
