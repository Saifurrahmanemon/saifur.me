'use client';

import { name } from '~/lib/user_details';
import { GithubIcon, LinkedInIcon } from '~/ui/icons';
import Tooltip from '~/ui/tooltip';

const githubLink = 'https://github.com/Saifurrahmanemon';
const linkedInLink = 'https://linkedin.com/in/saifurrahmanemon';

function HeroSection() {
  return (
    <section>
      <div className="flex items-center gap-1 my-4 sm:gap-4">
        <div className="flex flex-col">
          <h1 className="font-mono text-lg">{name}</h1>
          <h2 className="mb-0 text-gray-700 dark:text-gray-200">
            {/* {jobTitle} at <span className="font-semibold">{company}.</span> */}
            <em>Software Engineer</em>
          </h2>
          <div className="flex items-center gap-1 mt-1">
            <Tooltip text="Github">
              <a
                rel="noopener noreferrer"
                aria-label="github-link"
                target="_blank"
                href={githubLink}
              >
                <GithubIcon />
              </a>
            </Tooltip>
            <Tooltip text="LinkedIn">
              <a
                rel="noopener noreferrer"
                target="_blank"
                aria-label="linkedin-link"
                href={linkedInLink}
              >
                <LinkedInIcon />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
