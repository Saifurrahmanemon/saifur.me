import React from 'react';
import { projects, workExperience } from '~/lib/user_details';

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
      className={'w-4 h-4'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
};

export default function WorkPage() {
  return (
    <main className="mx-4 mt-6 mb-10">
      {/* Work Experience */}
      <div className="mb-10">
        <div className="space-y-10">
          {workExperience.map((job, index) => (
            <div key={index} className="group">
              <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-5 mb-4">
                <div className="flex-shrink-0">
                  <h3 className="font-medium">{job.company}</h3>
                  <p className="text-secondary">{job.position}</p>
                </div>
                <div className="flex-1 relative">
                  <span className="absolute inset-0 flex items-center">
                    <span className="w-full h-[1px] bg-gray-200 dark:bg-gray-800"></span>
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {job.period}
                </div>
              </div>
              <div className="ml-15">
                <div>
                  {job.contributions.map((contribution, i) => (
                    <p
                      className="text-secondary mt-2  prose prose-stone dark:prose-invert"
                      key={i}
                    >
                      {contribution}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-primary mb-2 text-lg">Projects</h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-5 mb-3">
                <div className="flex-1">
                  <h3 className="text-primary  flex items-center gap-1">
                    {project.name}
                    <a
                      href={project.link}
                      target="_blank"
                      className="cursor-pointer"
                      rel="noreferrer"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </h3>
                  <p className="text-secondary mt-2  prose prose-stone dark:prose-invert">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
