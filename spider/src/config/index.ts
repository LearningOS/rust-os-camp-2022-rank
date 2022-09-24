import * as dotenv from "dotenv";

export const config = dotenv.config();

export const organiztion: string = 'LearningOS';            // 组织
export const fullOrganization: string = '19380377-rust-os-camp-2022'; // classroom名称
export const assignment = 'rust-os-camp-2022';   // assignment
export const works = ['lab1', 'lab2', 'lab3', 'lab4', 'lab5']; // assignment 的不同情况
export const AUTH_TOKEN = process.env['TOKEN'];

// JsonData store the grades and the other info.
export let JsonData: ResultObject = {
    available: {},
    // grades has the tree. grades --> studentGithubUsername --> workName --> grade
    students: [],
    // latest update time
    latestUpdatedAt: Date.now()
}


// initialize the JsonData by works
for(let work of works) {
    JsonData['available'][work] = 0;
} 
