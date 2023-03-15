'use client';

import { company, jobTitle, name } from '~/lib/user_details';
import { GithubIcon, LinkedInIcon } from '~/ui/icons';

const githubLink = 'https://github.com/Saifurrahmanemon';
const linkedInLink = 'https://linkedin.com/in/saifurrahmanemon';

function HeroSection() {
  return (
    <section className="pt-20">
      <div className="flex items-center gap-1 my-10 sm:gap-4">
        <div className="flex items-center">
          <div className="w-24 h-24 rounded-full animate-pulse bg-slate-700"></div>
        </div>
        <div className="flex flex-col mt-4 sm:mt-2">
          <h1 className="font-mono text-2xl sm:text-3xl">{name}</h1>
          <h2 className="mb-0 text-gray-700 dark:text-gray-200">
            {jobTitle} at <span className="font-semibold">{company}.</span>
          </h2>
          <div className="flex items-center gap-1">
            <a rel="noopener noreferrer" target="_blank" href={githubLink}>
              <GithubIcon />
            </a>
            <a rel="noopener noreferrer" target="_blank" href={linkedInLink}>
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
