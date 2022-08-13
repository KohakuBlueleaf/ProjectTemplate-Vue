<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p>This is bootstrap5 typography system</p>
          <el-card class="box-card">
            <template #header>
              <div class="card-header d-flex justify-content-between">
                <span>Card</span>
                
                <el-dropdown>
                  <el-button type="primary">
                    El-plus dropdown
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </template>
            <p>This is Element-Plus Card</p>
          </el-card>
        </div>
        
        <div class="col-6">
          <p>This is bootstrap5 typography system</p>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card</h5>
              <p class="card-text">This is bootstrap Card</p>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  BS dropdown
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.card {
  color: black;
}
</style>
