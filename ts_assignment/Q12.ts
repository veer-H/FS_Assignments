interface OS {
    name: string;
    language: string;
}

function describeOS(osInfo: OS): void {
    console.log(`${osInfo.name} OS has ${osInfo.language} language.`);
}

const androidOS: OS = { name: "Android", language: "Java" };
describeOS(androidOS); // Output: Android OS has Java language.
