<template>
    <ContentWrapper>
        <div class="content-heading">Projects
            <div class="ml-auto">
                <button class="btn btn-secondary btn-sm" type="button">Create project</button>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-info">started</div>
                        </div>
                        <h4 class="m-0">Project #1</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="22" :max="100" variant="warning" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">22%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>01/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+5</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                        type:'pie',
                                        height:'24',
                                        sliceColors:['#edf1f2', '#23b7e5']
                                    }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                        type:'pie',
                                        height:'24',
                                        sliceColors:['#edf1f2', '#27c24c']
                                    }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                        type:'pie',
                                        height:'24',
                                        sliceColors:['#edf1f2', '#ff902b']
                                    }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-info">started</div>
                        </div>
                        <h4 class="m-0">Project #2</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="80" :max="100" variant="success" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">80%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>02/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+6</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-info">started</div>
                        </div>
                        <h4 class="m-0">Project #3</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="50" :max="100" variant="info" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">50%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>03/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+7</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-warning">paused</div>
                        </div>
                        <h4 class="m-0">Project #4</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="22" :max="100" variant="warning" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">22%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>04/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+8</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge bg-gray">pending</div>
                        </div>
                        <h4 class="m-0">Project #5</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <p class="m-0 text-center">This project does not register progress.</p>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>05/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+9</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-success">completed</div>
                        </div>
                        <h4 class="m-0">Project #6</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="100" :max="100" variant="success" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">100%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>06/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+10</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge bg-gray-dark">canceled</div>
                        </div>
                        <h4 class="m-0">Project #7</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="30" :max="100" variant="warning" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">30%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>04/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+8</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-info">started</div>
                        </div>
                        <h4 class="m-0">Project #8</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="10" :max="100" variant="danger" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">10%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>05/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+9</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6">
                <div class="card b">
                    <div class="card-header">
                        <div class="float-right">
                            <div class="badge badge-success">completed</div>
                        </div>
                        <h4 class="m-0">Project #9</h4>
                        <small class="text-muted">Sed amet lectus id.</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="w-100" v-b-tooltip.hover title="Health">
                                <b-progress :value="100" :max="100" variant="success" class="progress-xs m-0"></b-progress>
                            </div>
                            <div class="wd-xxs text-right">
                                <div class="text-bold text-muted">100%</div>
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>06/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Members</strong>
                            </td>
                            <td>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/04.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/05.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <img class="rounded-circle thumb24" src="img/user/06.jpg" alt="project member" />
                                </a>
                                <a class="inline mr-1" href="#">
                                    <strong>+10</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong> Leader</strong>
                            </td>
                            <td>
                                <a href="#" v-b-tooltip.hover title="Team leader">
                                    <img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline :values="[20,80]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#23b7e5']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[60,40]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#27c24c']
                                        }"
                                           class="sparkline inline mr-2"/>
                                <Sparkline :values="[90,10]"
                                           :options="{
                                            type:'pie',
                                            height:'24',
                                            sliceColors:['#edf1f2', '#ff902b']
                                        }"
                                           class="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button class="btn btn-secondary" type="button">Manage project</button>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>
<script>
    import Sparkline from '@/components/Common/Sparklines';
    export default {
        components: {
            Sparkline
        }
    }
</script>
