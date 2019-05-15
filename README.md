# Monorepo Example Setup

Two Angular sites sharing a common library between them in a Monorepo repository.

- Shared node_modules folder between all projects (eg bootstrap installed ONCE but used in all)
- Dynamic module loading from common
- Debugging Common from any of the web projects, with correct source mapping
- All projects managed from angular.json
- Both debug and headless unit test configurations
- Common is used like a library, though its available in the monorepo (useful for source maps for debugging). Simple tsconfig change can update this.
- Common can also be published as a node package at any time with `npm run build:c` - tha package will be available in `dist/frl-common/frl-common-x.x.x.tgz` 

## Get Started

1. Install with `npm i`
2. Run one of the sites from a terminal with `npm run start:m` or `npm run start:l`

See below for more details on other scripts added to this project.

## Setting up a monorepo style project

This project was structured using Angular CLI. Equally, something like NRWL NX could have been used, and actually has a similar folder structure.

```bash
ng new --createApplication=false monorepo
cd monorepo
ng g application frl-manage --prefix=frl
ng g application frl-lodge --prefix=frl
ng g library frl-common --prefix=frl
```

## Tests

Run tests to generate coverage reports:

- Run individual Common test: `npm run test:c` 
- Run individual Lodge test: `npm run test:l` 
- Run individual Manage test: `npm run test:m` 
- Run ALL tests: `npm run test:all` 

Coverage reports are combined using Istanbul-Combiner package.
After running all tests, view the final coverage report in the browser with `npm run start:cover` 

### Developing Tests

Develop tests with the alternate Karma configurations. The tests will be run in watch mode.

- Develop Common tests: `npm run dtest:c` 
- Develop Lodge tests: `npm run dtest:l` 
- Develop Manage tests: `npm run dtest:m` 

## Running the project

Each of the projects can be launched with

- Manage Project: `npm run start:m` 
- Lodge Project: `npm run start:l` 

## AOT Production Builds

Run a production build with one of the following commands. The files will be output to the `dist` folder.

- Production build for Lodge Project: `npm run build:l` 
- Production build for Manage Project: `npm run build:m` 
- Production build for All Projects: `npm run build:all` 

You can test the prod build locally by running

- View Production site for Lodge: `npm run start:pl` 
- View Production site for Manage: `npm run start:pm` 

## Shared Components

Shared components located in the `frl-common` project can be specified with the `@RegisterWidget()` decorator (located in frl-common). THis will register this component in a widget registry, so it can be dynamically loaded in any project.

You must provide the name of the component as an argument - this is because AOT will obfuscate the class names in the minification process, and therefore break the build.

```typescript
import { RegisterWidget } from 'frl-common'; 
// Registering a component
@RegisterWidget('mytest')
export class MyTestComponent {
  // ....
}

// Retrieving a component

export class ContainerComponent implements OnInit {
  // This template reference will be the destination for the dynamically loaded widget
  @ViewChild('hostElement', { read: ViewContainerRef }) widgetHost: ViewContainerRef; 

  constructor(private dynamicComponent: DynamicComponentService) {}

  ngOnInit(): void {
    this.loadComponent('mytest'); 
  }

  loadComponent(componentName: string): void {
    this.dynamicComponent.loadWidget(componentName, this.widgetHost); 
  }
}
```

## Angular Universal (Server Side Rendering)

SSR is now configured with Angular CLI schematics. Run the following command (pointing to the project to configure):

```bash
ng add @nguniversal/express-engine --clientProject frl-manage
```

To server Dynamic SSR:

```bash
npm run build:ssr && npm run serve:ssr
```
