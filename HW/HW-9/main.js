let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let block = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.innerText = course.title;

    let durationBlock = document.createElement("div");
    durationBlock.style.display = 'flex';
    durationBlock.style.gap = '20px';

    let spanmonth = document.createElement("span");
    spanmonth.innerText = `Month: ${course.monthDuration}`;
    spanmonth.style.flex = '1'

    let spanhour = document.createElement("span");
    spanhour.innerText = `Hour: ${course.hourDuration}`;
    spanhour.style.flex = '3';

    durationBlock.append(spanmonth, spanhour);

    let title = document.createElement("span");
    title.style.fontSize = '18px';
    title.style.fontWeight = 'bold';
    title.innerText = 'Modules: ';
    let ul = document.createElement("ul");
    for (const moduleElement of course.modules) {
        let li = document.createElement("li");
        li.innerText = moduleElement;
        ul.append(li);
    }

    block.append(h1, durationBlock, title, ul);
    document.body.append(block);
}