"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
const core_1 = require("@angular/core");
describe('AppComponent', () => {
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });
    it('should create the app', () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWdEO0FBQ2hELG1EQUErQztBQUMvQyx3Q0FBdUQ7QUFFdkQsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDNUIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0saUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7YUFDYjtZQUNELE9BQU8sRUFBRSxDQUFFLDZCQUFzQixDQUFFO1NBQ3BDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUMvQixNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDdEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZXNjcmliZSgnQXBwQ29tcG9uZW50JywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgICAgXSxcbiAgICAgIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdXG4gICAgfSkuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUgdGhlIGFwcCcsICgpID0+IHtcbiAgICBjb25zdCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGV4cGVjdChhcHApLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG5cbn0pO1xuIl19