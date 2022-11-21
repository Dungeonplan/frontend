import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/user';
import { ActionEnum } from 'src/app/enum/action-enum';
import { Role } from 'src/app/interface/role';
import { UserStoreService } from 'src/app/service/user-store.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Action } from 'src/app/interface/action';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})

export class AdminComponent implements OnInit, AfterViewInit {

  private user: User;
  private roles: Role[] = [];
  allActions: Action[] = [];

  dataSource = new MatTableDataSource<Role>([])
  columnsToDisplay = ['id', 'short_name', 'description'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedRole: Role | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  actions = new FormControl<Action[]>([]);

  constructor(private userStore: UserStoreService, private activatedRoute: ActivatedRoute) {
    this.user = this.userStore.getCurrentUser()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.roles = data['roles']
      this.allActions = data['actions']
      this.dataSource.data = this.roles
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  userCanSeeRolesTab(): boolean {
    return (this.user.hasPermission(ActionEnum.ROLE_ADD)
      || this.user.hasPermission(ActionEnum.ROLE_DELETE)
      || this.user.hasPermission(ActionEnum.ROLE_MODIFY))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getColumnName(descriptor: string): string {
    switch (descriptor) {
      case "id":
        return "ID"
      case "short_name":
        return "Role"
      case "description":
        return "Description"
      default:
        return ""
    }
  }

  roleHasAction(role: Role, action: Action): boolean {
    return role.actions != null
      && role.actions!.filter(element => {
        return element.id == action.id
      }).length > 0
  }

  actionsForRole(actions: Action[] | null, role: Role) {
    console.log(actions)
  }

  rowClicked(role: Role) {
    this.actions.setValue(role.actions || null)
  }
}
